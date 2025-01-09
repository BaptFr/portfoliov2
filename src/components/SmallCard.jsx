import { useState, useEffect } from 'react';
import styles from './SmallCard.module.scss';

function SmallCard ({ jsonFile, sectionKey, competence}) {
    const [card, setCard] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect (()=> {
        fetch(jsonFile)
        .then (response => {
            if(!response.ok) {
                console.error('Error fetching data:', response.statusText);
                throw new Error ('Failed fetch datas')
            }
            return response.json();
        })
        .then((data) => {
            if (data[sectionKey]) {
                //Find the choosen datas for the card
                const selectedCard = data[sectionKey].find(item => item.name === competence);
                if(selectedCard) {
                    setCard(selectedCard);
                } else {
                    throw new Error ('Unexisting Datas(comp name)');
                }
            }else{
                throw new Error ('Unexisting Data section');
            }
        })
        .catch((err) => {
            setError(err.message);
        })
        .finally(() => {
            setLoading(false);
        });

        }, [jsonFile, sectionKey, competence]);



    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error}</p>;


    return card ? (
        <div className={styles.smallCard}>
            <h3>{card.title}</h3>
            <img src={card.image} alt='dessin-competence'></img>
            <p> {card.text}</p>
        </div>
    ) : ( <p> Pas de données disponibles / No datas available</p>)
}

export default SmallCard;