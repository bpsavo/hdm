function fibonacci(n){
    if(n > 1){
        return fibonacci(n-1) + fibonacci(n-2);
    } else {
        return n;
    }
}

function es3_print_n_fibonacci(n){
    for(let i = 0; i<n; i++) {
        console.log(fibonacci(i));
    }
}

es3_print_n_fibonacci(6);

/*
0
1
1
2
3
5
*/
