function checkSpam (str){
    str = str.toLowerCase();
    if (str.includes('viagra') || str.includes('xxx')){
        return true;
    }
    else{
        return false;
    }
}

alert(checkSpam('buy viagra now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam('innocent rabbit'));