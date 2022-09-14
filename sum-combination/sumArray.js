    function section3(l,t){
        const arrCombination = []
        const digits = []

        
        for (let i = 1; i <= 9 ; i++) {
            digits.push(i)
        }

        function searchCombination(i, digits, l, t, arr){
            //cek sum array dibawah 0
            if(t < 0) return;

            if(arr.length === l){
                if(t === 0) {
                    arrCombination.push(arr.slice());
                }
                return
            }

            for (let j = i; j < digits.length ; j++) {
                arr.push(digits[j])
                searchCombination(j + 1, digits, l, t - digits[j], arr)
                arr.pop()
            }
        }

        searchCombination(0, digits, l, t, [])

        return arrCombination;
    }

    console.log(section3(3, 8))