for (let i = 0; i < 1000; i++) {
    for (let a = 2; a < i; a++) {
        if (i % a == 0) break;
        if (a == i - 1) console.log(i);
    }
}

