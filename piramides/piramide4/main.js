let altura =6;
for(let i=1;i<=altura;i++){
    for(let a=1;a<=altura-i;a++){
        document.write("=");
    }

    for(let k=1;k<=i;k++){
        document.write("*");
    }

    for (let a = i - 1; a > 0; a--) {
        document.write("*");
    }

    document.write('<br>');
}