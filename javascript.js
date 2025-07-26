
        document.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                myFunction();
                document.getElementById("input").value = "";
            }
        })
        function myFunction() {
            let input = document.getElementById('input').value;
            let result = "";
            let square;
            for(i=1; i<=input; i++){
                square = i*i;
                result += `Your Entered Loop of ${input} & it's Counting is ${i} & Square is ${i} x ${i} = ${square} <br>`
            }

            document.getElementById('output').style.display = "flex";
            document.getElementById('output').innerHTML = result;
        }   
