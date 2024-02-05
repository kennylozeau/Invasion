function getHighScores(db, highScores) {
    highScores = [];

    db.collection("high_scores")
        .orderBy("score", "desc")
        .limit(10)
        .get()
        .then((querySnapshot) => {
            let highScoresList = document.getElementById("high-scores")
        
            if (highScoresList.childElementCount > 0) {
                for (let i = highScoresList.childNodes.length - 1; i >= 0; i--) {
                    let child = highScoresList.childNodes[i];
                    highScoresList.removeChild(child);
                }
            }

            querySnapshot.forEach((doc) => {
                highScores.push([doc.data().name, doc.data().score]);
                let scoreLi = document.createElement("li");
                scoreLi.innerHTML = `${doc.data().name}  -  ${doc.data().score}`;
                highScoresList.appendChild(scoreLi);
            });
        });

    return highScores;
}

export default getHighScores;