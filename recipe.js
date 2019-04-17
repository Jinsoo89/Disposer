// Jinsoo Choi and Audrey Chae used MinecraftHelper skills from Amazon for the reference.
// Thank you Amazon!

/**
 * This is a file of recipes that Alexa provides for user to dispose.
 * Alexa Skill that the user asks Alexa how to dispose a thing and Alexa gives the user a suggestion for the thing. Also, the user can get help to know about the ways of
 * disposing such as recycling, composting...
 * Examples: The user asks, "Alexa, I need to dispose an apple." and Alexa answers, "Fruit scraps belong in the compost bin."
 * One-shot model:
 * User: "Alexa, ask Disposer how to dispose paper."
 * Alexa: "(reads back the way to dispose paper)"
 *
 * version 1.0   05/22/2016
 * there are way more to update!
 */

module.exports = {
    "glass": "seal it in a box or wrap it in several sheets of newspaper and place in your garbage",
    "metal": "you can dispose in your recycle bin, but if it is radioactive metal, find a place to recycle it",
    "wood": "call your local waste-management service or find a drop off location for wood recycling",
    "plastic": "if it is clean plastic, put it in your recycle bin otherwise you ask for waste management",
    "can": "A can goes in the recycling bin. But first, please make sure you empty the fluids down a sink",
    "banana peel": "A banana peel goes in the compost bin. Don't slip!",
    "leather": "Leather goes to compost bin",
    "Fabric": "Fabric goes to recycle bin",
    "plant": "plant, please landfill it",
    "food": "compost bin is my answer for food",
    "food waste": "compost bin is my answer for food waste",
    "fruit": "fruit scraps belong in the compost bin",
    "vegetable": "vegetable goes to compost bin",
    "cloth": "Cloth goes to recycle bin but i recommend you to donate it",
    "clothes": "Clothes goes to recycle bin but i recommend you to donate it",
    "plastic wrap": "A plastic wrap goes in the landfill bin. Let's try to reduce the use of this..",
    "water bottle": "A water bottle goes in the recycling bin. Please empty the fluids first.",
    "Microwave trays": "Microwave trays go in the landfill bin.",
    "cardboard": "Smaller pieces can go in the boxes, but please flatten larger boxes",
    "pet food bags": "Pet food bags are not recyclable. Please put them in the landfill bin.",
    "Chip bag": "These plastic bags or wrappings go in the landfill bin",
    "Cookie bag": "These plastic bags or wrappings go in the landfill bin",
    "Plastic spoon": "Plastic spoons go in the landfill bin",
    "Plastic fork": "Plastic forks go in the landfill bin",
    "Plastic knife": "Plastic knives go in the landfill bin",
    "styrofoam": "Styrofoam goes in the landfill bin",
    "rubber bands": "Rubber bands belong in the landfill bin",
    "paper": "Paper is recyclable! Yay",
    "magazine": "Magazines are recyclable! Yay",
    "magazines": "Magazines are recyclable! Yay",
    "coffee grounds": "Coffee grounds go in the compost bin",
    "tea bags": "Tea bags go in the compost bin",
    "apple": "Fruit scraps belong in the compost bin",
    "apple core": "Fruit scraps belong in the compost bin",
    "cardboard take out boxes": "these food soiled cardboard packages go in the compost bin",
    "sandwiches": "sandwiches belong in the compost bin",
    "straws": "straws belong in the landfill bin",
    "plastic bags": "plastic bags belong in the landfill bin",
    "condiment packages": "condiment packages belong in the landfill bin",
    "yogurt containers": "Yogurt containers belong in the landfill bin",
    "plastic bottles": "these go in the recycling bin",
    "human": "human waste goes to toilet and flush it. I hope you are not saying real human otherwise I will call the police",
    "animal": "animal waste goes to toilet and flush it, or landfill it",
    "recycle": "Ok, recycle bin collects drink cans, food tins, cartons, papers, plastic bottles, cardboard",
    "recycle bin": "Ok, recycle bin collects drink cans, food tins, cartons, papers, plastic bottles, cardboard",
    "recycling": "Ok, recycle bin collects drink cans, food tins, cartons, papers, plastic bottles, cardboard",
    "recycling bin": "Ok, recycle bin collects drink cans, food tins, cartons, papers, plastic bottles, cardboard",
    "compost": "Ok, compost bin collects things you can compost include vegetable peelings, fruit waste, teabags, plant prunings and grass cuttings, food",
    "compost bin": "Ok, compost bin collects things you can compost include vegetable peelings, fruit waste, teabags, plant prunings and grass cuttings, food",
    "composting": "Ok, compost bin collects things you can compost include vegetable peelings, fruit waste, teabags, plant prunings and grass cuttings, food",
    "composting bin": "Ok, compost bin collects things you can compost include vegetable peelings, fruit waste, teabags, plant prunings and grass cuttings, food",
    "trash": "Ok, any non-biodegradable and non-recyclable waste goes to trash",
    "trash bin": "Ok, any non-biodegradable and non-recyclable waste goes to trash",
    "trashing": "Ok, any non-biodegradable and non-recyclable waste goes to trash",
    "landfill": "Ok, be aware of landfilling. Please ask local waste-management service or google it.",
    "landfilling": "Ok, be aware of landfilling. Please ask local waste-management service or google it.",
    "garbage": "Ok, basically whatever left from recycling, composting, and trash go to garbage",
    "garbage bin": "Ok, basically whatever left from recycling, composting, and trash go to garbage",
    "person": "Do not dispose the person please, be mercyful",
    "shoes": "shoes go to recycle bin, but donation is recommended",
    "shoe": "shoe goes to recycle bin, but donation is recommended",
    "socks": "socks go to recycle bin, but donation is recommended if the condition is good",
    "underwear": "underwear goes to recycle bin",
    "glasses": "seal it in a box or wrap it in several sheets of newspaper and place in your garbage",
    "television": "All those electronics be donated or recycled",
    "computer": "All those electronics be donated or recycled",
    "laptop": "All those electronics be donated or recycled",
    "dvd": "All those electronics be donated or recycled",
    "desktop": "All those electronics be donated or recycled",
    "electronics": "All those electronics be donated or recycled",
    "microwave": "All those electronics be donated or recycled",
    "siri": "siri deserves it! hahahahaha",
    "you": "seriously? I am not going to be disposed, never! hahahaha",
    "me": "na neun han gook sa ram e eh yo, an nyung ha sae yo?",
    "toothbrushes" : "In order for a tooth brush to be recyclable, the metal staples that hold the brushes, the nylon bristlse and the plastic handle must be separated first.",
    "toothbrush" :"In order for a tooth brush to be recyclable, the metal staples that hold the brushes, the nylon bristlse and the plastic handle must be separated first.",
    "tooth paste tubes": "You can ship the tubes to TerraCycle for free to be recycled. TerraCycle collaborates with Colgate and Tom's of Maine to collected empty tubes for reuse.",
    "floss" : "floss is not recyclable because of the polytetrafluoroethylene coating. Dispose of it in the landfill bin"
};

