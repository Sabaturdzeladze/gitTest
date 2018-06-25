function truncate(str, maxlength) {
    if (str.length > maxlength){
        str = str.substring(0, str.length)   
        return str + '...'
    }
    return str;
}

alert(truncate("awrnviasbrncjiansierbvoansrvasr", 20))
alert(truncate("awrnvi", 20))