// Jinsoo Choi and Audrey Chae used MinecraftHelper skills from Amazon for the reference.
// Thank you Amazon!

/**
 * This is a Lambda function for handling Alexa Skill that the user asks Alexa how to dispose a thing
 * and Alexa gives the user a suggestion for the thing. Also, the user can get help to know about the ways of
 * disposing such as recycling, composting...
 * Examples: The user asks, "Alexa, I need to dispose an apple." and Alexa answers, "Fruit scraps belong in the compost bin."
 * One-shot model:
 * User: "Alexa, ask Disposer how to dispose paper."
 * Alexa: "(reads back the way to dispose paper)"
 *
 * version 1.0   05/22/2016
 */

'use strict';

var AlexaSkill = require('./AlexaSkill'),
    recipes = require('./recipes');

var APP_ID = undefined; //replace with 'amzn1.echo-sdk-ams.app.[your-unique-value-here]';

/**
 * Disposer is a child of AlexaSkill.
 * To read more about inheritance in JavaScript, see the link below.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance
 */
var Disposer = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
Disposer.prototype = Object.create(AlexaSkill.prototype);
Disposer.prototype.constructor = Disposer;

Disposer.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    var speechText = "Welcome to disposer. The App that will tell you how to dispose your garbage. What do you need to get rid of?";
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    var repromptText = "For instructions on what you can say, please say help me or have no idea.";
    
    response.ask(speechText, repromptText);
};

Disposer.prototype.intentHandlers = {
    "BinIntent": function (intent, session, response) {
        var itemSlot = intent.slots.Item, itemName;
            
        if (itemSlot && itemSlot.value){
            itemName = itemSlot.value.toLowerCase();
        }

        var cardTitle = "Recipe for " + itemName,
            recipe = recipes[itemName],
            speechOutput,
            repromptOutput;
            
        if (recipe) {
            speechOutput = {
                speech: recipe,
                type: AlexaSkill.speechOutputType.PLAIN_TEXT
            };
            
            response.tellWithCard(speechOutput, cardTitle, recipe);
        } else {
            var speech;
            
            if (itemName) {
                speech = "I'm sorry, I currently do not know how to dispose " + itemName + ". What is that made of?";
            } else {
                speech = "I'm sorry, I currently do not know that item. What is that made of?";
            }
            
            speechOutput = {
                speech: speech,
                type: AlexaSkill.speechOutputType.PLAIN_TEXT
            };
            
            repromptOutput = {
                speech: "What else can I help with?",
                type: AlexaSkill.speechOutputType.PLAIN_TEXT
            };
            
            response.ask(speechOutput, repromptOutput);
        }
    },
    
    "ContIntent": function (intent, session, response) {
        var itemSlot = intent.slots.Cont, itemName;
		
	if (itemSlot && itemSlot.value){
		itemName = itemSlot.value.toLowerCase();
	}
	
	var cardTitle = "Recipe for " + itemName,
	    recipe = recipes[itemName], speechOutput, repromptOutput;
	    
	if (recipe) {
	    speechOutput = {
		    speech: recipe,
		    type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        
        response.tellWithCard(speechOutput, cardTitle, recipe);
	} else {
            var speech;
            
            if (itemName) {
                speech = "I'm sorry, I currently do not know how to dispose " + 
                itemName + ". What else can I help with?";
            } else {
                speech = "I'm sorry, I currently do not know that item. " +
                "What else can I help with?";
            }
            
            speechOutput = {
                speech: speech,
                type: AlexaSkill.speechOutputType.PLAIN_TEXT
            };
            
            repromptOutput = {
                speech: "What else can I help with?",
                type: AlexaSkill.speechOutputType.PLAIN_TEXT
            };
            
            response.ask(speechOutput, repromptOutput);
        }
    },

    "WaysIntent": function (intent, session, response) {
        var itemSlot = intent.slots.Way,
            itemName;
            
        if (itemSlot && itemSlot.value){
            itemName = itemSlot.value.toLowerCase();
        }

        var cardTitle = "Recipe for " + itemName,
            recipe = recipes[itemName],
            speechOutput,
            repromptOutput;
            
        if (recipe) {
            speechOutput = {
                speech: recipe,
                type: AlexaSkill.speechOutputType.PLAIN_TEXT
            };
            
            response.tellWithCard(speechOutput, cardTitle, recipe);
        } else {
            var speech;
            
            if (itemName) {
                speech = "I'm sorry, there is no disposing way of " + itemName;
            } else {
                speech = "I'm sorry, there is no disposing way of " + itemName;
            }
            
            speechOutput = {
                speech: speech,
                type: AlexaSkill.speechOutputType.PLAIN_TEXT
            };
            
            repromptOutput = {
                speech: "What else can I help with?",
                type: AlexaSkill.speechOutputType.PLAIN_TEXT
            };
            
            response.ask(speechOutput, repromptOutput);
        }
    },
  
    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.HelpIntent": function (intent, session, response) {
        var speechText = "is it made of metal? plastic? wood? glass? or you can get help by saying tell me about recycle or whatever ways to dispose. Now, what can I help you with?";
        var repromptText = "you can get help by saying tell me about recycle or whatever ways to dispose. Now, what can I help you with?";
        var speechOutput = {
            speech: speechText,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        var repromptOutput = {
            speech: repromptText,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        response.ask(speechOutput, repromptOutput);
    }
};

exports.handler = function (event, context) {
    var disposer = new Disposer();
    disposer.execute(event, context);
};
