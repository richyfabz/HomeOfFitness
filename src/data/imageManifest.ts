export const imageManifest = {
  instagram: new URL("../../img/(4) Instagram.webp", import.meta.url).href,
  bacak: new URL("../../img/Bacak.webp", import.meta.url).href,
  commitToBeFit: new URL("../../img/Commit to be Fit! 💪.webp", import.meta.url)
    .href,
  darkGym: new URL(
    "../../img/Dark Gym Aesthetic for Ultimate Workout Motivation and Strength_.webp",
    import.meta.url,
  ).href,
  dosariBliss: new URL("../../img/Dosari Bliss.webp", import.meta.url).href,
  downloadOneJfif: new URL("../../img/download (1).jfif", import.meta.url).href,
  downloadOneWebp: new URL("../../img/download (1).webp", import.meta.url).href,
  downloadTwoWebp: new URL("../../img/download (2).webp", import.meta.url).href,
  downloadThreeWebp: new URL("../../img/download (3).webp", import.meta.url)
    .href,
  downloadFourWebp: new URL("../../img/download (4).webp", import.meta.url)
    .href,
  downloadFiveWebp: new URL("../../img/download (5).webp", import.meta.url)
    .href,
  downloadSixWebp: new URL("../../img/download (6).webp", import.meta.url).href,
  downloadJfif: new URL("../../img/download.jfif", import.meta.url).href,
  downloadWebp: new URL("../../img/download.webp", import.meta.url).href,
  e7: new URL("../../img/ea761847a5cf93d22011bdca2bc231e7.jpg", import.meta.url)
    .href,
  fitnessInspoOneJfif: new URL(
    "../../img/Fitness inspo (1).jfif",
    import.meta.url,
  ).href,
  fitnessInspoOneWebp: new URL(
    "../../img/Fitness inspo (1).webp",
    import.meta.url,
  ).href,
  fitnessInspoJfif: new URL("../../img/Fitness inspo.jfif", import.meta.url)
    .href,
  fitnessInspoWebp: new URL("../../img/Fitness inspo.webp", import.meta.url)
    .href,
  fitnessLogo: new URL("../../img/fitness logo.jfif", import.meta.url).href,
  circuitTraining: new URL(
    "../../img/Full Body Circuit Training.jfif",
    import.meta.url,
  ).href,
  gigantesco: new URL(
    "../../img/GIGANTESCO MUSCULOSO  GRITANDO.webp",
    import.meta.url,
  ).href,
  groupWorkout: new URL(
    "../../img/Group Workout Sessions.jfif",
    import.meta.url,
  ).href,
  gymAesthetic: new URL("../../img/Gym aesthetic.webp", import.meta.url).href,
  joy: new URL("../../img/Joy.jfif", import.meta.url).href,
  consistency: new URL(
    "../../img/Phone wallpaper consistency.jfif",
    import.meta.url,
  ).href,
  prodicum: new URL("../../img/Prodicum NFT.webp", import.meta.url).href,
  sport: new URL("../../img/Sport.webp", import.meta.url).href,
  tevoLift: new URL(
    "../../img/TEVEO Lift Collection_ Built for Intensity_ Trusted for Progress_.jfif",
    import.meta.url,
  ).href,
  transformCoaching: new URL(
    "../../img/Transform Your Body & Mind with Expert Fitness Coaching 💪🔥.webp",
    import.meta.url,
  ).href,
  watsonLegPressOne: new URL(
    "../../img/WATSON ANIMAL PLATE LOADED LEG PRESS (1).jfif",
    import.meta.url,
  ).href,
  watsonLegPress: new URL(
    "../../img/WATSON ANIMAL PLATE LOADED LEG PRESS.jfif",
    import.meta.url,
  ).href,
  gymEquipmentStory: new URL(
    "../../img/gym-equipment-story.webp",
    import.meta.url,
  ).href,
  gymDesignRef: new URL(
    "../../img/Дизайн тренажерного зала_ Пожалуйста, предоставьте список названий_.webp",
    import.meta.url,
  ).href,
} as const;

export type ImageKey = keyof typeof imageManifest;
