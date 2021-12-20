
const Science= document.getElementById('q1');
const Mathematics= document.getElementById('q2');
const GernalKnowledge= document.getElementById('q3');
const CurrentAffairs= document.getElementById('q4');
const Arts= document.getElementById('q5');
const history= document.getElementById('q6');
const geography= document.getElementById('q7');
const Sports= document.getElementById('q8');
const allQuiz =document.getElementById('q0');



Science.addEventListener('click',()=>{
    document.getElementById('Allquiz').style.display="none";
    document.getElementById('mathQuiz').style.display="none";
    document.getElementById('scienceQuiz').style.display="block";
    document.getElementById('gkQuiz').style.display="none";
    document.getElementById('caQuiz').style.display="none";
    document.getElementById('artsQuiz').style.display="none";
    document.getElementById('hisQuiz').style.display="none";
    document.getElementById('geoQuiz').style.display="none";
    document.getElementById('sportaQuiz').style.display="none";
    
})

Mathematics.addEventListener('click',()=>{
    document.getElementById('Allquiz').style.display="none";
    document.getElementById('mathQuiz').style.display="block";
    document.getElementById('scienceQuiz').style.display="none";
    document.getElementById('gkQuiz').style.display="none";
    document.getElementById('caQuiz').style.display="none";
    document.getElementById('artsQuiz').style.display="none";
    document.getElementById('hisQuiz').style.display="none";
    document.getElementById('geoQuiz').style.display="none";
    document.getElementById('sportaQuiz').style.display="none";
})

GernalKnowledge.addEventListener('click',()=>{
    document.getElementById('Allquiz').style.display="none";
    document.getElementById('mathQuiz').style.display="none";
    document.getElementById('scienceQuiz').style.display="none";
    document.getElementById('gkQuiz').style.display="block";
    document.getElementById('caQuiz').style.display="none";
    document.getElementById('artsQuiz').style.display="none";
    document.getElementById('hisQuiz').style.display="none";
    document.getElementById('geoQuiz').style.display="none";
    document.getElementById('sportaQuiz').style.display="none";
})

CurrentAffairs.addEventListener('click',()=>{
    document.getElementById('Allquiz').style.display="none";
    document.getElementById('mathQuiz').style.display="none";
    document.getElementById('scienceQuiz').style.display="none";
    document.getElementById('gkQuiz').style.display="none";
    document.getElementById('caQuiz').style.display="block";
    document.getElementById('artsQuiz').style.display="none";
    document.getElementById('hisQuiz').style.display="none";
    document.getElementById('geoQuiz').style.display="none";
    document.getElementById('sportaQuiz').style.display="none";
})

Arts.addEventListener('click',()=>{
    document.getElementById('Allquiz').style.display="none";
    document.getElementById('mathQuiz').style.display="none";
    document.getElementById('scienceQuiz').style.display="none";
    document.getElementById('gkQuiz').style.display="none";
    document.getElementById('caQuiz').style.display="none";
    document.getElementById('artsQuiz').style.display="block";
    document.getElementById('hisQuiz').style.display="none";
    document.getElementById('geoQuiz').style.display="none";
    document.getElementById('sportaQuiz').style.display="none";
})

history.addEventListener('click',()=>{
    document.getElementById('Allquiz').style.display="none";
    document.getElementById('mathQuiz').style.display="none";
    document.getElementById('scienceQuiz').style.display="none";
    document.getElementById('gkQuiz').style.display="none";
    document.getElementById('caQuiz').style.display="none";
    document.getElementById('artsQuiz').style.display="none";
    document.getElementById('hisQuiz').style.display="block";
    document.getElementById('geoQuiz').style.display="none";
    document.getElementById('sportaQuiz').style.display="none";
})

geography.addEventListener('click',()=>{
    document.getElementById('Allquiz').style.display="none";
    document.getElementById('mathQuiz').style.display="none";
    document.getElementById('scienceQuiz').style.display="none";
    document.getElementById('gkQuiz').style.display="none";
    document.getElementById('caQuiz').style.display="none";
    document.getElementById('artsQuiz').style.display="none";
    document.getElementById('hisQuiz').style.display="none";
    document.getElementById('geoQuiz').style.display="block";
    document.getElementById('sportaQuiz').style.display="none";
})
Sports.addEventListener('click',()=>{
    document.getElementById('Allquiz').style.display="none";
    document.getElementById('mathQuiz').style.display="none";
    document.getElementById('scienceQuiz').style.display="none";
    document.getElementById('gkQuiz').style.display="none";
    document.getElementById('caQuiz').style.display="none";
    document.getElementById('artsQuiz').style.display="none";
    document.getElementById('hisQuiz').style.display="none";
    document.getElementById('geoQuiz').style.display="none";
    document.getElementById('sportaQuiz').style.display="block";
})
 
allQuiz.addEventListener('click',()=>{
    document.getElementById('Allquiz').style.display="block";
    document.getElementById('mathQuiz').style.display="none";
    document.getElementById('scienceQuiz').style.display="none";
    document.getElementById('gkQuiz').style.display="none";
    document.getElementById('caQuiz').style.display="none";
    document.getElementById('artsQuiz').style.display="none";
    document.getElementById('hisQuiz').style.display="none";
    document.getElementById('geoQuiz').style.display="none";
    document.getElementById('sportaQuiz').style.display="none";
});
