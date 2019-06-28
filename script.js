function Vigenere (input, key, forward)
{
  if (key == null)
    key = "";
  var alfabeto =   "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  + "abcdefghijklmnopqrstuvwxyz";

  // Validação de chave
  key = key . toUpperCase ();
  var key_len = key . length;
  var i;
  var chavejust = "";
  for (i = 0; i < key_len; i ++)
  {
    var key_char = alfabeto . indexOf (key . charAt (i));
    if (key_char < 0)
      continue;
    chavejust += alfabeto . charAt (key_char);
  }
  key = chavejust;
  key_len = key . length;
  if (key_len == 0)
  {
    alert ('Você esqueceu de fornecer sua chave!');
    key = "a";
    key_len = 1;
  }

  // Transformação da imput:
  var input_len = input . length;
  var output = "";
  var key_index = 0;
  var in_tag = false;
  for (i = 0; i < input_len; i ++)
  {
    var input_char = input . charAt (i);
    if (input_char == "<")
      in_tag = true;
    else if (input_char == ">")
      in_tag = false;
    if (in_tag)
    {
      output += input_char;
      continue;
    }
    var valordachave = alfabeto . indexOf (input_char);
    if (valordachave < 0)
    {
      output += input_char;
      continue;
    }
    var maiu = valordachave >= 26 ? true : false;
    if (forward)
    valordachave += alfabeto . indexOf (key . charAt (key_index));
    else
    valordachave -= alfabeto . indexOf (key . charAt (key_index));
    valordachave += 26;

    if (maiu)
    valordachave = valordachave % 26 + 26;
    else
    valordachave %= 26;
    output += alfabeto . charAt (valordachave);
    key_index = (key_index + 1) % key_len;

  }
  return output;
}

function runcoder (dir)
{
  document . form . output . value = Vigenere (document . form . input . value, document . form . key . value, dir);

}