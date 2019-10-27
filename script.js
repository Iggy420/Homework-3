//Generate random password
    alert('Choose the legnth of your Password with the slider!');
function generate(){
    // set password lenght/comlexity
    let complexity = document.getElementById('slider').value;
   
    // possible password values
    let values = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+'

    let password = '';

    // for loop to pick the value to generate password
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }
    
    // Add password to text box display area
    document.getElementById('display').value = password;

    //Add pass words to section of previously generated passwords
     document.getElementById('lastNums').innerHTML += password + '<br />';
} 

    // Display the leghtn of the password
    document.getElementById('length').innerHTML = 'Length 25';
    // Function to set length based on slider position
    document.getElementById('slider').oninput = function () {

        if(document.getElementById('slider').value > 0){
            document.getElementById('legnth').innerHTML = 'legnth' + document.getElementById(slider).value;
        }
        else{
            document.getElementById('legnth').innerHTML = 'Legnth: 1';
    }
}

// Function to copy password to Clipboard
function copyToClipboard(){
    document.getElementById('display').select();
    document.execCommand('Copy'); 
    alert('password copied to clipboard!');
}