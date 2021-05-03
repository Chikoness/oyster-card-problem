// ------------------------------------------------- //
// OYSTER CARD PROBLEM
// Charlene A. @ https://github.com/Chikoness
// ------------------------------------------------- //

// stations
const HOL = "Holborn"
const EC = "Earl's Court"
const WI = "Wimbledon"
const HS = "Hammersmith"
const STATIONS = [HOL, EC, WI, HS]

// modes of transportation
const TRANSPORT = ["bus", "tube"]

// zones
const ZONE_1 = [HOL, EC]
const ZONE_2 = [EC, HS]
const ZONE_3 = [WI]

// fares
const FARE_ZONE_1_INSIDE = 2.5
const FARE_ZONE_1_OUTSIDE = 2.0
const FARE_TWO_ZONES_IN = 3.0
const FARE_TWO_ZONES_EX = 2.25
const FARE_THREE_ZONES = 3.2
const FARE_BUS = 1.8

function calculatePrice(sOne, sTwo, transport, swipeOut) { //swipeOut is used to detect if the user will be charged maximum fare or not
    let price = 0;

    // if no such transport exists, return error string
    if (!TRANSPORT.includes(transport)) {
        return "No such transport";
    } else if (!STATIONS.includes(sOne) && !STATIONS.includes(sTwo)) {
        // checking if both stations has the right name
        return "One or both stations does not exist"
    } else if (swipeOut == false) {
        price = FARE_THREE_ZONES;
    } else {
        // Once all checks are done, it can start calculating
        if (transport == "tube") {
            // Anywhere in zone 1
            if (ZONE_1.includes(sOne) && ZONE_1.includes(sTwo)) {
                price = FARE_ZONE_1_INSIDE;
            }

            // Any zone outside zone 1
            else if (!ZONE_1.includes(sOne) && !ZONE_1.includes(sTwo)) {
                price = FARE_ZONE_1_OUTSIDE;
            }

            // Any two zones including zone 1
            else if (ZONE_1.includes(sOne) || ZONE_1.includes(sTwo)) {
                price = FARE_TWO_ZONES_IN;
            }

            // Any two zones excluding zone 1
            else if (!ZONE_1.includes(sOne) || !ZONE_1.includes(sTwo)) {
                price = FARE_TWO_ZONES_EX;
            }

            // Any three zones, or if the user never swipes out (maximum fare)
            else {
                price = FARE_THREE_ZONES;
            }

        } else {
            // bus prices are all the same
            price = FARE_BUS;
        }
    }

    return price.toFixed(2);
}

function main() {
    // user loads a card with £30
    let card = 30;

    // ----- INSTRUCTIONS ------- //
    // Run calculation by typing the following :-
    // calculatePrice("-Station One-", "-Station Two-", "-Transport-", "true/false (Did user swipe out card?)")
    // eg: calculatePrice ("Earl's Court", "Holborn", "tube", true) 
    // Feel free to follow theformat of the example running code below
    // ----- INSTRUCTIONS ------- //


    // -- EXAMPLE RUNNING CODE TAKEN FROM THE ASSESSMENT -- //
    // IF USER SWIPES OUT CARD PROPERLY :
    console.log("Card is now: £" + card + "\n")
    // Tube Holborn to Earl’s Court
    console.log("IF USER SWIPES OUT CARD PROPERLY :")
    card -= calculatePrice("Holborn", "Earl's Court", "tube", true);
    console.log("Tube Holborn to Earl’s Court - price is £" + calculatePrice("Holborn", "Earl's Court", "tube", true) + " - balance: £" + card.toFixed(2));
    // 328 bus from Earl’s Court to Chelsea
    card -= calculatePrice("Earl's Court", "Chelsea", "bus", true);
    console.log("328 bus from Earl’s Court to Chelsea - price is £" + calculatePrice("Earl's Court", "Chelsea", "bus", true) + " - balance: £" + card.toFixed(2));
    // Tube Earl’s court to Hammersmith
    card -= calculatePrice("Earl's Court", "Hammersmith", "tube", true)
    console.log("Tube Earl’s court to Hammersmith - price is - £" + calculatePrice("Earl's Court", "Hammersmith", "tube", true) + " - balance: £" + card.toFixed(2));

    console.log("\nFinal card balance: £" + card.toFixed(2));
    
    // reload the card to £30 to test no swiping out
    card = 30;
    
    //IF USER DOES NOT SWIPE OUT CARD PROPERLY : 
    console.log("\n\nCard is now: £" + card + "\n")
    // Tube Holborn to Earl’s Court
    console.log("IF USER DOES NOT SWIPE OUT CARD PROPERLY :")
    card -= calculatePrice("Holborn", "Earl's Court", "tube", false);
    console.log("Tube Holborn to Earl’s Court - price is £" + calculatePrice("Holborn", "Earl's Court", "tube", false) + " - balance: £" + card.toFixed(2));
    // 328 bus from Earl’s Court to Chelsea
    card -= calculatePrice("Earl's Court", "Chelsea", "bus", false);
    console.log("328 bus from Earl’s Court to Chelsea - price is £" + calculatePrice("Earl's Court", "Chelsea", "bus", false) + " - balance: £" + card.toFixed(2));
    // Tube Earl’s court to Hammersmith
    card -= calculatePrice("Earl's Court", "Hammersmith", "tube", false)
    console.log("Tube Earl’s court to Hammersmith - price is - £" + calculatePrice("Earl's Court", "Hammersmith", "tube", false) + " - balance: £" + card.toFixed(2));

    console.log("\nFinal card balance: £" + card.toFixed(2));
    // -------------------------------------------------------- //

}

main();