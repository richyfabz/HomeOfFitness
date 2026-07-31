# Image Repair Map

## Home Page
- Hero background: `darkGym`
- First editorial band: `bgImage`
- Second editorial band: `bgImage2`
- Classes preview:
  - `dumbbellRackCloseup`
  - `recoveryHoodie`
  - `dumbbellWalk`
- Trainer preview:
  - `dumbbellWalk`
  - `hoodedGymPortrait`
  - `recoveryHoodie`
- Facilities strip:
  - hero media: `benchPressStation`
  - supporting cards: `benchPressStation`, `dumbbellRackCloseup`, `abWheel`, `dumbbellWalk`
- Home shop edit:
  - `handGripper`
  - `adjustableDumbbells`
  - `blackOversizedTee`
  - `abWheel`

## Shop Catalogue
- Shop hero image: `tevoLift`
- Product cards use the first manifest image key for each item, with fallback support only if an asset fails.
- Product gallery thumbs now resolve via the manifest so the displayed thumb always matches the intended asset.

## Product Mapping Notes
- `gym-duffel-bag`: `accessoryKit`, `downloadWebp`, `gymEquipmentStory`
- `workout-gloves`: `accessoryKit`, `gymEquipmentStory`, `jumpRopeKit`
- `speed-jump-rope`: `jumpRopeKit`, `sport`, `consistency`
- `adjustable-dumbbell-set`: `dumbbellSet`, `chromeDumbbellSet`, `bgImage`
- `chrome-dumbbell-set`: `chromeDumbbellSet`, `dumbbellSet`, `bgImage`
- `chest-expander`: `chestExpander`, `jumpRopeKit`, `bgImage`
- `kettlebell-dumbbell`: `kettlebell`, `bgImage`, `sport`
- `medicine-ball`: `medicineBall`, `bgImage`, `circuitTraining`
- `atlas-training-tee`: `fitnessInspoWebp`, `commitToBeFit`, `darkGym`
- `forge-leggings`: `sport`, `bacak`, `gymAesthetic`
- `pulse-bottle`: `joy`, `gymEquipmentStory`, `consistency`
- `lift-towel`: `downloadSixWebp`, `downloadThreeWebp`, `sport`
- `focus-crop-top`: `fitnessInspoWebp`, `fitnessInspoOneWebp`, `commitToBeFit`
- `recovery-cap`: `e7`, `instagram`, `consistency`
- `home-training-bundle`: `tevoLift`, `darkGym`, `groupWorkout`

## Outcome
- No duplicate asset was left unresolved by the manifest.
- The most visually important images are now smaller and better balanced across the home and shop pages.
