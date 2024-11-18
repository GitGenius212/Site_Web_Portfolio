const myPara = document.
            getElementById('para');
        const processBar = document.
            getElementById('process_bar');
 
        function animatePara() {
            myPara.classList.toggle('animate');
            processBar.classList.
                toggle('processing_inner_animate')
        }
 
        setInterval(animatePara, 1000);