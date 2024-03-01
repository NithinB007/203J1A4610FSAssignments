function capi(str:string){
    let resstr='';
    for(let i=0;i<str.length;i++)
    {
        const currchar=str.charAt(i);
        if(currchar >='a' && currchar <='z'){

        
        resstr = resstr+currchar.toUpperCase();
        }
    }
	return resstr;
}
let res=capi('jello');
console.log(res);