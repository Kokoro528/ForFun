var decodeString = function(s) {
    var buf = [];
    for (let i = 0; i < s.length; i++) {
        console.log(s[i]);
        if (s[i] !== ']') {
            buf.push(s[i]);
        }
        else {
            let tmp = [];
            while (buf.length > 0 && buf[buf.length -1] !== '[') {
                tmp.push(buf.pop());
            }
            
            tmp.reverse();
            buf.pop();
            let ten = 1;
            let num = 0;
            while (buf.length > 0 && !Number.isNaN(parseInt(buf[buf.length - 1]))) {
                let digit = buf[buf.length - 1];
                num += digit * ten;
                ten *= 10;
                buf.pop();
            }
            num = num === 0?1: num;
            buf = buf.concat(Array(num).fill(tmp.join('')).join(''));
            
            
        }
        
        
    }
    return buf.join('');
};

console.log(decodeString('2[ab]3[c[cb]]'));
