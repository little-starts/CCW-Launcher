interface aardioExternal {  
    /** 这是一个 aardio  函数 */
    onCounterUpdate(name:string,value:number):Promise<string>; 
}

declare var aardio: aardioExternal
 