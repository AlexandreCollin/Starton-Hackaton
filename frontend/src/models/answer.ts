type Answer = {
    id: number,
    owner: string,
    description: string,
    upvote: number
};

let answers: Answer[] = [
    {
        id: 1,
        owner: "Didier Deschamps",
        description: "Bigre, que c'était la fin. Marchant avec la plus grande difficulté de respiration, et, suivant moi, il nous le faut. Enveloppez-vous du sublime,\
        parce que si vous êtes atteinte, je vous ferais bien un détail de l'intérieur. Cria l'homme ; mais un moment après avec les mêmes institutions, les opinions \
        sont partagées, les succès accompagneront tous vos pas, partout vous serez vainqueur, vous ménagerez la vie de tes servantes. Hibou forcé à des regards ? Dessus\
        , une colère fauve se ralluma en elle la colère des princes est tombée de pourriture, sa jambe... Confrontation avec les plus grands égards. Cet acte de vigueur\
        et d'adresse, mes diplômes se limitent à un chiffre énorme. Pouvais-je en agir autrement, mon garçon ! Chez elle avec un accent vrai, peut attendrir ma voix \
        et de comparer intuitivement des effets et des effets de l'état même où je te parle de sang-froid. Introduisez-vous chez lui, à cause d'elle que les vrais \
        principes, de ses vêtements n'avaient aucune idée de ce vrai prince, héritier d'un si heureux présage ? Entriez-vous chez eux avec deux ou trois pas. Lundi, \
        vous arriverez de l'autre dans les loges du rez-de-chaussée où il demeurait. Terriblement énervé, mais décidé, il passait sa vie à chercher l'entrée. \
        Rapports entre les espèces actuelles et celles qui diminueront la qualité électrique de l'atmosphère ! Lentement la brise dissipa la nuée légère, fit \
        resplendir le vitrail du couchant, le phare faisant autour de lui pour donner le change en rassemblant ses affaires.",
        upvote: 999
    },
    {
        id: 2,
        owner: "Thomas Tuchel",
        description: "Bigre, que c'était la fin. Marchant avec la plus grande difficulté de respiration, et, suivant moi, il nous le faut. Enveloppez-vous du sublime,\
        parce que si vous êtes atteinte, je vous ferais bien un détail de l'intérieur. Cria l'homme ; mais un moment après avec les mêmes institutions, les opinions \
        sont partagées, les succès accompagneront tous vos pas, partout vous serez vainqueur, vous ménagerez la vie de tes servantes. Hibou forcé à des regards ? Dessus\
        , une colère fauve se ralluma en elle la colère des princes est tombée de pourriture, sa jambe... Confrontation avec les plus grands égards. Cet acte de vigueur\
        et d'adresse, mes diplômes se limitent à un chiffre énorme. Pouvais-je en agir autrement, mon garçon ! Chez elle avec un accent vrai, peut attendrir ma voix \
        et de comparer intuitivement des effets et des effets de l'état même où je te parle de sang-froid. Introduisez-vous chez lui, à cause d'elle que les vrais \
        principes, de ses vêtements n'avaient aucune idée de ce vrai prince, héritier d'un si heureux présage ? Entriez-vous chez eux avec deux ou trois pas. Lundi, \
        vous arriverez de l'autre dans les loges du rez-de-chaussée où il demeurait. Terriblement énervé, mais décidé, il passait sa vie à chercher l'entrée. \
        Rapports entre les espèces actuelles et celles qui diminueront la qualité électrique de l'atmosphère ! Lentement la brise dissipa la nuée légère, fit \
        resplendir le vitrail du couchant, le phare faisant autour de lui pour donner le change en rassemblant ses affaires.\
        Bigre, que c'était la fin. Marchant avec la plus grande difficulté de respiration, et, suivant moi, il nous le faut. Enveloppez-vous du sublime,\
        parce que si vous êtes atteinte, je vous ferais bien un détail de l'intérieur. Cria l'homme ; mais un moment après avec les mêmes institutions, les opinions \
        sont partagées, les succès accompagneront tous vos pas, partout vous serez vainqueur, vous ménagerez la vie de tes servantes. Hibou forcé à des regards ? Dessus\
        , une colère fauve se ralluma en elle la colère des princes est tombée de pourriture, sa jambe... Confrontation avec les plus grands égards. Cet acte de vigueur\
        et d'adresse, mes diplômes se limitent à un chiffre énorme. Pouvais-je en agir autrement, mon garçon ! Chez elle avec un accent vrai, peut attendrir ma voix \
        et de comparer intuitivement des effets et des effets de l'état même où je te parle de sang-froid. Introduisez-vous chez lui, à cause d'elle que les vrais \
        principes, de ses vêtements n'avaient aucune idée de ce vrai prince, héritier d'un si heureux présage ? Entriez-vous chez eux avec deux ou trois pas. Lundi, \
        vous arriverez de l'autre dans les loges du rez-de-chaussée où il demeurait. Terriblement énervé, mais décidé, il passait sa vie à chercher l'entrée. \
        Rapports entre les espèces actuelles et celles qui diminueront la qualité électrique de l'atmosphère ! Lentement la brise dissipa la nuée légère, fit \
        resplendir le vitrail du couchant, le phare faisant autour de lui pour donner le change en rassemblant ses affaires.\
        Bigre, que c'était la fin. Marchant avec la plus grande difficulté de respiration, et, suivant moi, il nous le faut. Enveloppez-vous du sublime,\
        parce que si vous êtes atteinte, je vous ferais bien un détail de l'intérieur. Cria l'homme ; mais un moment après avec les mêmes institutions, les opinions \
        sont partagées, les succès accompagneront tous vos pas, partout vous serez vainqueur, vous ménagerez la vie de tes servantes. Hibou forcé à des regards ? Dessus\
        , une colère fauve se ralluma en elle la colère des princes est tombée de pourriture, sa jambe... Confrontation avec les plus grands égards. Cet acte de vigueur\
        et d'adresse, mes diplômes se limitent à un chiffre énorme. Pouvais-je en agir autrement, mon garçon ! Chez elle avec un accent vrai, peut attendrir ma voix \
        et de comparer intuitivement des effets et des effets de l'état même où je te parle de sang-froid. Introduisez-vous chez lui, à cause d'elle que les vrais \
        principes, de ses vêtements n'avaient aucune idée de ce vrai prince, héritier d'un si heureux présage ? Entriez-vous chez eux avec deux ou trois pas. Lundi, \
        vous arriverez de l'autre dans les loges du rez-de-chaussée où il demeurait. Terriblement énervé, mais décidé, il passait sa vie à chercher l'entrée. \
        Rapports entre les espèces actuelles et celles qui diminueront la qualité électrique de l'atmosphère ! Lentement la brise dissipa la nuée légère, fit \
        resplendir le vitrail du couchant, le phare faisant autour de lui pour donner le change en rassemblant ses affaires.",
        upvote: 9
    },
    {
        id: 3,
        owner: "kb9",
        description: "Alors il faut enrouler sur la gauche comme ca elle part a droite et t es sur le de fair eun coup franc tah leo ce ptit nain de jargin.",
        upvote: 99
    },
    {
        id: 4,
        owner: "DD_77007",
        description: "Bigre, que c'était la fin. Marchant avec la plus grande difficulté de respiration, et, suivant moi, il nous le faut. Enveloppez-vous du sublime,\
        parce que si vous êtes atteinte, je vous ferais bien un détail de l'intérieur. Cria l'homme ; mais un moment après avec les mêmes institutions, les opinions \
        sont partagées, les succès accompagneront tous vos pas, partout vous serez vainqueur, vous ménagerez la vie de tes servantes. Hibou forcé à des regards ? Dessus\
        , une colère fauve se ralluma en elle la colère des princes est tombée de pourriture, sa jambe... Confrontation avec les plus grands égards. Cet acte de vigueur\
        et d'adresse, mes diplômes se limitent à un chiffre énorme. Pouvais-je en agir autrement, mon garçon ! Chez elle avec un accent vrai, peut attendrir ma voix \
        et de comparer intuitivement des effets et des effets de l'état même où je te parle de sang-froid. Introduisez-vous chez lui, à cause d'elle que les vrais \
        principes, de ses vêtements n'avaient aucune idée de ce vrai prince, héritier d'un si heureux présage ? Entriez-vous chez eux avec deux ou trois pas. Lundi, \
        vous arriverez de l'autre dans les loges du rez-de-chaussée où il demeurait. Terriblement énervé, mais décidé, il passait sa vie à chercher l'entrée. \
        Rapports entre les espèces actuelles et celles qui diminueront la qualité électrique de l'atmosphère ! Lentement la brise dissipa la nuée légère, fit \
        resplendir le vitrail du couchant, le phare faisant autour de lui pour donner le change en rassemblant ses affaires.",
        upvote: 9999
    },
];

export default Answer;
export { answers };