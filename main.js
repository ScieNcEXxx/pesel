var start = document.getElementById("pesel")
start.addEventListener('keyup', function()
	{
		sprawdzpesel(start.value)
	})
 
function sprawdzpesel(pesel)
	{
		var wzor = [9, 7, 3, 1, 9, 7, 3, 1, 9, 7];
		var ostatnia = 0;
		
		for (var i = 0; i < 10; i++)
			{
				ostatnia += wzor[i] * pesel.charAt(i);
			}
		 
		ostatnia %= 10;
		 
		var sprawdzostatnia = pesel.charAt(10);
		 

		var punktyX = document.getElementById("punkty")
		var punkty = 0;
			if (pesel.match(/^[0-9]{4}[0-3]{1}[0-9]{1}/))
				{
					punkty += 1
				}  
			if (pesel.match(/[0-9]{4}/))
				{
					punkty += 0
				}
			if (ostatnia == sprawdzostatnia) 
				{
					punkty +=1
				}        
			if (pesel.length == 11)
				{
					punkty += 1
				}
			if (pesel.match(/[a-zA-Z]/))
				{
					punkty -= 10
				}




			if(punkty==1)
				{
					document.getElementById("kolorki").style.backgroundColor="red";
				}

			if(punkty==2)
				{
					document.getElementById("kolorki").style.backgroundColor="orange";
				}

			if(punkty==3)
				{
					document.getElementById("kolorki").style.backgroundColor="green";
				}    
	}