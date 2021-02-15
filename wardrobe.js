let isRainy = true;
let temperature = 23;
let clothes = '';
let areGoingTo = 'kill a dragon';
let location = 'Australia';
let has_something_between_legs = false;

// environment
env = {isRainy: isRainy, temperature: temperature, areGoingTo: areGoingTo, location: location, hsbl: has_something_between_legs, clothes: clothes};
console.log(`going to = ${env.areGoingTo}`);
console.log(`location = ${env.location}`);


if (env.temperature >= 32 && env.location == 'swimming pool') {
    clothes += 'swimsuit';
} else {
    clothes += 'sockets, underpants, ';
    let apply = (env.areGoingTo == 'apply for a job');
    if (apply && (env.hsbl == true))
	clothes += 'Suit & Tie, ';
    else if (apply && (env.hsbl == false))
	clothes += 'tailored skirt, ';
    else if (env.areGoingTo == 'kill a dragon')
	clothes += 'mithril armor, ';
    else if (env.hsbl)
	clothes += 'pants, ';
    else if (! env.hsbl)
	clothes += 'skirt, '
    if (env.isRainy)
	clothes += 'umbrella, ';
    if (env.temperature < 15)
	clothes += 'coat, ';
    else if (env.temperature >= 15 && temperature <= 20)
	clothes += 'sweater, ';
    else if (env.temperature > 20)
	clothes += 't-shirt, ';
    if (env.location == 'swamp')
	clothes += 'boots, ';
    else if (env.location == 'home')
	clothes += 'slipper';
    else if (env.location == 'SimCity')
	clothes = 'Put whatever you want, ';
    if (env.location == 'Australia')
	clothes += 'fireproof suit (be careful during bushfires season), ';
    clothes += 'and Thug Life glasses';
}

console.log(`Je vous recommande de porter: ${clothes}`)
