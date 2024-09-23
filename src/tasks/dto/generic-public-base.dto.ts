export class GenericPublicBaseDto<T> {
 // statusCode:number
 // message:string
  //data:T

  constructor(private statusCode:number=200,private message:string= "Success",private data: T = null) {
    this.statusCode = statusCode
    this.message = message
    this.data = data
  }
}
