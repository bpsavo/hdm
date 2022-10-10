function es1_stampa_inverso(vec){
    let i = vec.length -1;
    for(i; i>= 0; i--) {
        console.log(vec[i]);
    }
}

let arr = [12, 5.3, false, "hello world", 0xff];

es1_stampa_inverso(arr);

/*
255
hello world
false
5.3
12
*/