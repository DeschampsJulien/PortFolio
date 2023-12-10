<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <div>
      <!-- Importation via icones8.fr -->
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABx0lEQVR4nO2Xu04CQRSGv0YoFLCQQnwY0dKYKDyGop3GS6M8knYWxktETLw1ij6FinQGx0xyNBPCrrgs7FncLzkJ2Zkd/pP/zJkdGAxpYA2oAy2JS6ACpIgJM8A9YDziFiignLSTxAOwBGQkloGGjN1od2ZdhD4CuS7jOSeZVRRzJSKtE16UZI7dM2p5F5G2lLzIypwmimn2kEguDonURaTd2F6UZU4NxVREZMNjs08CzzJnBcWk5JywQp9kY2clyk4S18AYyik4yXQLm8Q0MSEl50RNOpmNCykn9U6MDHmgKmXV8imtlszZB6ZQRgl48xHvFa+/tOqhJ9EWYQdAERj3mW/H5oBDeaetIZm848R2gPd35d2XqMus6jgRlG9n9oiQOxFhyyko886FK/Kv3Yk+1sj0+BFpJAZCWIv7rVMEjp27v/09G8J/9iwgjHV2fFp3kObyZwFhrLMIfAIfwIZ0NdslN+WZHVsgBpxKclZ4J1syduI+PApwImuLcxSICCsYaFsbAmZkEzExD84ViOg3zrpaFBOMl94kkYgwiSPKMIkjyjCJI8owiSPKMIkjyjCJI8owiSPKMP/GEROzoJM43t1/7upfUgsDMIZtPIAAAAAASUVORK5CYII=">
      <RouterLink to="/">Accueil</RouterLink>
    </div>
    <div>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEGUlEQVR4nO2aWahVVRjHfydn0dIkc8zSrqIlPtSTgqIoV5EUqpeuYThgDqARhkMiOKIPJaggog/igJKiIFEWTXrDEBOcsIjEWfGWUt6LZly98sF/yWJz7jl777PP2VvwD+thD+u/v++sb33TOvAUT/FEoRa4BXwOtOEJV6RJ4zNgCDAN2AQcBs4A14C7wAmgmoyiFbDCUybM2AK0JiPoDawBbgSE/APYCswDRgIDgBeAdsBirYy9Z6vVIU0FegIbgf884U8CHwH9Qsx/DbigeXtJyYQWAA0SohHYDbwZg6vK43mRCmIwcNpbgX0SphT8Iy4zu4pgOHBPHzWTGJUAZy/x3aSC2KePHgI6JsT5nji/ooJYG9G1RhnzKqmIuc3NwN9lUKSKlLBGAnxaAsdL4rhKinBmZoEtLqrF8SMpYr6EWFcCxyJxbCBFTJAQ35fA8ZM43iFFfCAhLG3PxZhvUfx/cbxNijgmIWbHnN8SWC6O/aSISxLi1RI4honjZ1LENxLCTCwuZohjFylitoS4CCyMMX+Z4odxvE+KaOvtk98jzs15Ga95LisLUsWz8jyNESu8/lKiLktlbq2EmhRhzgLNsWIsM3Ab9teQ8aSN5/HGkyG09TattYCKYadX2z9DxvCWhLse4l2Xtgfr+77AdlWK91WB/qA6pSsVQvcYivjoV6TGsS7N0ko4hlIV2eGV0FXaR32VTB4EHur5caALGVbkSpEq0Zoe57291Zkyodozga5FGnpOkUHe/du6537t8XIgpuA43esG/Kb39pRLiTpPQHOtHwOvq9PynJrZiwMt1ct6Zrimeyasv0LuPYeXgX91/92kFBgNfO3Z75fA0RBNBktJjgAPlBkY6gKdxuYUMcz0TCxOHfQ4ZkwRiftQgyJ1C40JitjngHr9gmeBbcAYxQ7bzDXi7OMVaA7jpIwpMTYgQ2tP0RFRFbBW5qqACdnGXpJAm3N9jFR+teZYAyQU7Nf7xLPLJplPTQI+PeflXI3aR2ExUvMs+y6KToqsToFvgTdIBmZaB8Rre2xuiBVokFVEcvcdlAS65pnZfVLIKci5fTExxJx6vX9H1610balMQWzyTpzM9yeJSeL+CxgYcs4qKbNS1x3DdPAHaLnvR/hQFHwnIWaVwDFIHHZOU7QVaqtSDrgobm43n/0Hke/5dHF8QQH8opeSOMTJB3fe2L4Z+w8i3/PDujeZArhVhiMDG6+I/7iu7YAnn/2vDqxA8Plwmb4p9nyhyN1UpjEn0Gq92Uy2W19ghbop2jfFbEElipzyMqdMsIEdXAG/K+lSk9qs/EWkvaeMjVOK8kOBHhKyszLoqQrGfmbhsuZMICcX7BoXxYalSVYKWPM7k7CczY4V7B8Ulk2YYnYEbub1p1zsh82dIj8CNuHGmlKGqlsAAAAASUVORK5CYII=">
      <RouterLink to="/Creations">Créations</RouterLink>
    </div>
    <div>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABnElEQVR4nO2ZS0oDQRBA30ISr6A3cKEHEL1CPIGexIW7JG68g7sshYBLwbNklCS6M1tLGmpgbCYk/ZsesR80gSbdVW+qJkymofCLEVAB4jgqXdsbKg+JeixSJzcApsCbQ1KuuFRuojk5M/G4uqlERMc4pF3OHRJyZd91F43KJAvi+t2uY2AvzNVaNUVEHK5Iip9fSV2RNq40IR+JUZ9EUiBFxKJUJBJSWsuitNYOhsAd8AF8Ag86Z9Pr1jIJz/d8qpW+ijQlviyR9V8RGTYkTNJnwG1jz2XK+BJpozYJ9LOuzDRhfGJsZP6aPum6lSWx1vln4DBR/CgbhUj0RiRUohciMSSyi9gSp54SWUViSmQTiS2RTWS25Z5Y6fx8y/NUrPhRNjoGvoGNVYkQiSwiN42EDSfAu2c7ZRV51PkXldkEViKbSNtroFmgRBaRVz16MJW5Bo58ggXE724jT6SIWJSKREJKa/231pKOR00RkY5baRfe+dTHaeZoODeXmot5xerMOON9IVvGvY/IQGVCDjpjjaVKHPiIFAr48wMof5pdwhFq9wAAAABJRU5ErkJggg==">
      <RouterLink to="/Projets">Projets 404</RouterLink>
    </div>
    <div>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABZklEQVR4nO2ZvUoDQRCAPxVirw8jmHews7Oys1UbiZYafRHBxjovoFj4AAr+YEh8AQvLkYU9OQ8W9n72bgfng202dzP3ZW52QxYMwzCMgRgBV8AnIB2PJTD1OZJzmUCgOi76EFn6ZNsJYo9LlUmO+KE1fu8ikroHRbGIlHuwt9Kn7kFRLPLn+U0kE+TfVmQNOAXegG/gDthCochhYOlz86pEHgIizygTeQqIzFEmMguIPNZM2Ha0FrkOBL6JuDcrkftAYDc/JFJXZCcg4uZViaz4PaQs8e7n1e3s+xWRgwYJB+8Rx24l6B4KRUZ+hSoHvQXWGRaJFdkAjoCXwDf0ChwDm2QqsgpMgK/IkrvrTvx9WYmcNXyHJ7n1yLxhoo/cRLQgJpIZYhXJDLGKaK2IRK7nXT+YROb7/bw46Bl3FLgtUiNf8Sf2An++UGdH7WqH7jLfefHzfFqqjCaRhZfo5bDVMAyG5wd2WzEUbOEOYQAAAABJRU5ErkJggg==">
      <RouterLink to="/Contact">Contact</RouterLink> 
    </div> 
  </nav>
</template>
  
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,700;1,400&display=échanger');

nav{
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  border-top: 1px solid black;
  font-family: "Raleway", sans-serif;
}
div {
  display: flex;
  align-items: center;
}
/* La balise "a" est implétentée par défaut avec la balise "RouterLink" */
a{
  color: black;
  font-size: xx-large;
  font-weight: 600;
  margin: 10px 25px 0 10px;
  text-decoration: none;
}
a:focus{
  animation: jello-horizontal 0.9s both;
  color:rgb(46, 185, 139);
  transition: color 0.9s;
  text-decoration: underline; 
}
@keyframes jello-horizontal {
  0% {
    transform: scale3d(1, 1, 1);
  }
  30% {
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
}
</style>