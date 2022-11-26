import { MessageClient } from "cloudmailin";

let string = document.getElementById("string") as HTMLBodyElement;

string.innerHTML = "More games incoming";

const client = new MessageClient({username:"beans",apiKey:"XiDHYVTgPCghPwdEyc3EcypV"})
const response = client.sendMessage({
    to:'dabdissanyake@gmail.com',
    from:'dabdissanayake@gmail.com',
    plain:'a client visited the website',
    subject:"client"
})