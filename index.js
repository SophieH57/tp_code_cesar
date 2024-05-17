const alphabet = "abcdefghijklmnopqrstuvwxyz";

function cesar_encode_letter(nb, letter) {
  let letter_index = alphabet.indexOf(letter);
  let ind = letter_index + (nb % 26);
  //   console.log(ind);
  let encode_letter =
    ind > 25
      ? alphabet[ind - 26]
      : ind < 0
      ? alphabet[ind + 26]
      : alphabet[ind];
  return encode_letter;
}

function cesar_decode_letter(nb, letter) {}

function cesar_encode(nb, msg) {
  let encoded_message = "";
  for (let char of msg) {
    if (char == " ") {
      encoded_message += char;
    } else {
      encoded_message += cesar_encode_letter(nb, char);
    }
  }
  //   console.log(encoded_message);
  return encoded_message;
}

function cesar_decode(nb, msg) {
  let decoded_message = "";
  for (let char of msg) {
    if (char == " ") {
      decoded_message += char;
    } else {
      decoded_message += cesar_encode_letter(nb, char);
    }
  }
  //   console.log(decoded_message);
  return decoded_message;
}

// Analyse fréquentielle

function freq(msg) {
  let freq = {};
  for (let char of msg) {
    if (char != " ") {
      if (char in freq) {
        freq[char] += 1;
      } else {
        freq[char] = 1;
      }
    }
  }
  //   console.log(freq);

  let maxValue = 0;
  let maxKey = "";
  Object.keys(freq).forEach((key) => {
    if (maxKey == "") {
      maxKey = key;
      maxValue = freq[key];
    } else {
      if (maxValue > 0 && freq[key] > maxValue) {
        maxKey = key;
        maxValue = freq[key];
      }
    }
  });
  console.log("maxKey", maxKey, "maxValue", maxValue);

  let e_encode_letter_index = alphabet.indexOf(maxKey);
  const e_index = alphabet.indexOf("e");
  let decalage = -(e_encode_letter_index - e_index);
  //   console.log(decalage);
  return cesar_decode(decalage, msg);
}

const msg = "ceci est une phrase de test";
const nb_decalage = 185;

let enc_message = cesar_encode(nb_decalage, msg);
console.log(enc_message);

let dec_message = cesar_decode(-nb_decalage, enc_message);
console.log(dec_message);

let decode_msg_freq = freq(enc_message);
console.log(decode_msg_freq);
