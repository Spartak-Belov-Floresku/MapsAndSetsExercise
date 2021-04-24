// new Set([1,1,2,2,3,4]) returns a new Set object that includes unique values {'1','2','3','4'}

//[...new Set("referee")].join("") returns a new string that includes unique letters 'ref'

/*
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
{[1,2,3]: true, [1,2,3]: false}
*/


const hasDuplicate = (arr) => { 
    let arrSet = new Set(arr);
    return arrSet.size != arr.length? true : false;
} ;

const vowelCount = (str) =>{
    let strMap = new Map();
    return [...str].reduce((mAp, next) => {
        if([...'aeiou'].some(el => {return el == next})){
            if(mAp.has(next)){
               let i = mAp.get(next);
               mAp.set(next, i+1); 
            }else{
                mAp.set(next, 1);
            }
        }
        return mAp;
    }, strMap);
}