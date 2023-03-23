class ApiFeatures{
    constructor(query,queryStr){
        this.query = query
        this.queryStr = queryStr
    }
    
    search(){
        const keyword = this.queryStr.keyword ?
         {
            name:{
                $regex: this.queryStr.keyword,
                $options: "i"
            }
         } : 
         {}
         this.query = this.query.find({...keyword})
         return this

    }
    filter(){
        const queryCopy = {...this.queryStr}

        // removing some field for category
  
        const removeFields = ['keyword','page','limit']

        removeFields.forEach(key => delete queryCopy[key] )

        // filter for price and rating
 
        let queryS = JSON.stringify(queryCopy)
        queryS = queryS.replace(/\b(gt|gte|lt|lte)\b/g, key => `$${key}`)
        this.query = this.query.find(JSON.parse(queryS))

      //  this.query = this.query.find(queryCopy)
        return this
    }

    pagination(resultPerPage){

        const currentPage = Number(this.queryStr.page) || 1

        const skip = resultPerPage * (currentPage-1)

        this.query = this.query.find().limit(resultPerPage).skip(skip)

        return this
    }


}

module.exports = ApiFeatures