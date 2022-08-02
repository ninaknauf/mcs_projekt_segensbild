const newWin = window.open("result.html", undefined, "popup");

newWin.onload = () => {
  let questionElement = document.getElementById("question");
  let pleaseEvaluate = newWin.document.getElementById("please-evaluate")
  let showingResult = document.getElementById("showing-result")

  let overlays = [
    newWin.document.getElementById("grain"),
    newWin.document.getElementById("water"),
    newWin.document.getElementById("plants"),
  ];

  let nextButton = document.getElementById("next");
  let resultElement = newWin.document.getElementById("result");
  let slider = document.getElementById("slider");
  let sliderView = document.getElementById("sliderContainer");
  let wordsView = document.getElementById("wordsContainer");

  let word1 = document.getElementById("word1");
  let word2 = document.getElementById("word2");
  let word3 = document.getElementById("word3");

  let result = newWin.document.getElementById("resultimg");

  let answersSlider = [];
  let answersWord = [];
  let questionIndex = -1;
  let questions = [
    "Wie sehr haben sich die Steine nach Segen angefühlt?",
    "Welches Wort beschreibt das Gefühl von Segen für dich am besten?",
    "Wie sehr hat sich das Wasser nach Segen angefühlt?",
    "Welches Wort beschreibt das Gefühl von Segen für dich am besten?",
    "Wie sehr haben sich die Pflanzen nach Segen angefühlt?",
    "Welches Wort beschreibt das Gefühl von Segen für dich am besten?",
  ];

  //fragen durchgehen
  nextQuestion();
  nextButton.onclick = nextQuestion;
  function nextQuestion() {
    console.log(questionIndex);

    if (questionIndex === 0 || questionIndex === 2 || questionIndex === 4) {
      //slider verstecken
      sliderView.style.visibility = "hidden";
      //words anzeigen
      wordsView.style.visibility = "visible";

      //1. wortfrage
      if (questionIndex === 0) {
        word1.innerText = "Familie";
        word2.innerText = "Gemeinschaft";
        word3.innerText = "Individuell";

        //speichern und weiter zur nächsten frage
        word1.onclick = () => saveword(0, "Familie");
        word2.onclick = () => saveword(0, "Gemeinschaft");
        word3.onclick = () => saveword(0, "Individuell");
      }
      //2. wortfrage
      else if (questionIndex === 2) {
        word1.innerText = "Natur";
        word2.innerText = "Überall";
        word3.innerText = "Berührung";

        word1.onclick = () => saveword(1, "Natur");
        word2.onclick = () => saveword(1, "Überall");
        word3.onclick = () => saveword(1, "Berührung");
      }
      //3. wortfrage
      else if (questionIndex === 4) {
        word1.innerText = "Warm";
        word2.innerText = "Riesig";
        word3.innerText = "Weich";

        word1.onclick = () => saveword(2, "Warm");
        word2.onclick = () => saveword(2, "Riesig");
        word3.onclick = () => saveword(2, "Weich");
      }
    } else if (questionIndex >= 0) {
      //slider anzeigen, words verstecken
      wordsView.style.visibility = "hidden";
      sliderView.style.visibility = "visible";
      //antwort speichern
      answersSlider[Math.floor(questionIndex / 2)] = parseInt(slider.value);
    }
    questionIndex++;
    if (questionIndex >= questions.length) {
      generateImage();
      return;
    }
    console.log(answersWord);
    questionElement.innerText = questions[questionIndex];
  }

  //wort antwort speichern und zur nächsten frage gehen
  function saveword(i, word) {
    answersWord[i] = word;
    nextQuestion();
  }

  //zufällige zahl zwischen zwei zahlen
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function getRandomImage(foldername) {
    //zufälliges bild aus der gruppe (0-26) zurück geben
    let imgesInFolder = [
      "1_TradingCard.jpg",
      "2_TradingCard.jpg",
      "3_TradingCard.jpg",
      "4_TradingCard.jpg",
    ];

    let imgNr = randomIntFromInterval(0, 3);
    console.log(
      "zufällig gewähltes bild " + imgNr + " aus ordner " + foldername
    );

    return "images/" + foldername + "/" + imgesInFolder[imgNr];
  }

  function chooseImage() {
    if (answersWord[0] === "Familie") {
      if (answersWord[1] === "Natur") {
        if (answersWord[2] === "Warm") {
          return getRandomImage("family,nature,warm");
        } else if (answersWord[2] === "Riesig)") {
          return getRandomImage("family,nature,huge");
        } else {
          return getRandomImage("family,nature,soft");
        }
      } else if (answersWord[1] === "Überall)") {
        if (answersWord[2] === "Warm") {
          return getRandomImage("family,everywhere,warm");
        } else if (answersWord[2] === "Riesig)") {
          return getRandomImage("family,everywhere,huge");
        } else {
          return getRandomImage("family,everywhere,soft");
        }
      } else {
        if (answersWord[2] === "Warm") {
          return getRandomImage("family,touch,warm");
        } else if (answersWord[2] === "Riesig)") {
          return getRandomImage("family,touch,huge");
        } else {
          return getRandomImage("family,touch,soft");
        }
      }
    } else if (answersWord[0] === "Gemeinschaft") {
      if (answersWord[1] === "Natur") {
        if (answersWord[2] === "Warm") {
          return getRandomImage("community,nature,warm");
        } else if (answersWord[2] === "Riesig)") {
          return getRandomImage("community,nature,huge");
        } else {
          return getRandomImage("community,nature,soft");
        }
      } else if (answersWord[1] === "Überall)") {
        if (answersWord[2] === "Warm") {
          return getRandomImage("community,everywhere,warm");
        } else if (answersWord[2] === "Riesig)") {
          return getRandomImage("community,everywhere,huge");
        } else {
          return getRandomImage("community,everywhere,soft");
        }
      } else {
        if (answersWord[2] === "Warm") {
          return getRandomImage("community,touch,warm");
        } else if (answersWord[2] === "Riesig)") {
          return getRandomImage("community,touch,huge");
        } else {
          return getRandomImage("community,touch,soft");
        }
      }
    } else {
      if (answersWord[1] === "Natur") {
        if (answersWord[2] === "Warm") {
          return getRandomImage("individual,nature,warm");
        } else if (answersWord[2] === "Riesig)") {
          return getRandomImage("individual,nature,huge");
        } else {
          return getRandomImage("individual,nature,soft");
        }
      } else if (answersWord[1] === "Überall)") {
        if (answersWord[2] === "Warm") {
          return getRandomImage("individual,everywhere,warm");
        } else if (answersWord[2] === "Riesig)") {
          return getRandomImage("individual,everywhere,huge");
        } else {
          return getRandomImage("individual,everywhere,soft");
        }
      } else {
        if (answersWord[2] === "Warm") {
          return getRandomImage("individual,touch,warm");
        } else if (answersWord[2] === "Riesig)") {
          return getRandomImage("individual,touch,huge");
        } else {
          return getRandomImage("individual,touch,soft");
        }
      }
    }
  }

  //bild generieren
  function generateImage() {
    document.getElementById("evaluation").style.display = "none";
    sliderView.style.display = "none";
    wordsView.style.display = "none";
    nextButton.style.display = "none";

    //grundbild auswählen
    result.src = chooseImage();
    console.log("chosen image:" + chooseImage());

    let highestEffect = 0;

    highestEffect = 0;
    let highestEffectValue = answersSlider[0];
    for (let i = 1; i < 3; i++) {
      if (answersSlider[i] > highestEffectValue) {
        highestEffect = i;
        highestEffectValue = answersSlider[i];
      }
    }
    console.log("highest effect: " + highestEffect);
    const overlay = overlays[highestEffect];
    overlay.style.opacity = 0.8;

    /*
    for (let i = 0; i < answersSlider.length; i++) {
        for (const overlay of overlays[i]) {
            overlay.style.opacity = answersSlider[i] / 10;
        }
    }
     */
    resultElement.style.display = "flex";
    showingResult.style.display = "flex";
    pleaseEvaluate.style.display = "none"
  }
};
