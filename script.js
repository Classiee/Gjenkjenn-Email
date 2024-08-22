let html = '';

document.getElementById('app').innerHTML = `
    
        <input type="text" id="email" placeholder="Enter your email">
        <button onclick="Verify()">Submit</button>
        `;

        function Verify() {
            const email = document.getElementById('email').value;
            let hasAtSymbol = false;
            let hasDot = false;
            let hasSpace = false;
        
            for (let i = 0; i < email.length; i++) {
                if (email[i] === '@') {
                    hasAtSymbol = true;
                } else if (email[i] === '.') {
                    hasDot = true;
                } else if (email[i] === ' ') {
                    hasSpace = true;
                }
            }
        
            if (hasAtSymbol && hasDot && !hasSpace) {
                alert('Email is valid');
            } else {
                alert('Email is invalid');
            }
        }

