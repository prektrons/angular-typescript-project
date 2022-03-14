class IASYS
{
    InnerData;
    Template ;
    constructor(InnerData)
    {
       this.InnerData = InnerData;
       this.Template =  `<h1>${this.InnerData}</h1>`
    }
    
  
    render()
    {
        return this.Template;
    }
}