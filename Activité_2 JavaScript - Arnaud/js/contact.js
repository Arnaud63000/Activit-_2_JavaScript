    var choix= 1;
    var choix = 2;
    var choix = 0;  
    var contacts = ["Arnaud Pronostiqueur", "Michou Petanque", "MichMich LeBoff", "Martine LaTartine"];
    var NewContact = contacts.length;

    console.log("Bienvenue à vous, choisissez une option !");
    console.log("1: Listez les contacts");
    console.log("2: Ajoutez un contact");
    console.log("0: Quitter");
   function gestionnaire()
   {
     choix = (prompt("choisissez une option !"));
   
    if(choix==1)
    {
        console.log("Voici la liste de vos contacts:")
        for(i = 0; i < contacts.length; i++)
        {
            console.log(contacts[i]);
        }
             console.log(NewContact);
        gestionnaire();

    }
    else if(choix==2)
    {
        console.log("Ajoutez un contact");
        NewContact = (prompt("Ajoute ton contact"));
        console.log(NewContact+ " à était ajouté avec succès!");
        gestionnaire();
    }
    else if(choix==0)
    {
        console.log("Ciao l'artiste!!!")
    }
   }
   gestionnaire();
