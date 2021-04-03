 //Global rna_sequence variable
 var rna_sequence;

 //Function to convert DNA to RNA
 function dnaToRna() {
     var dnaInput = document.getElementById("dna-input").value;

     //Remove any spaces in input-field
     dnaInput = dnaInput.replace(/ /g,'');

     //Convert all letters to upper-case letters
     dnaInput = dnaInput.toUpperCase();

     //Convert input text to charArray -> rna
     var rna = dnaInput.split('');
     //Function to perfrom DNA -> RNA sequence conversion
     for (let i = 0; i < rna.length; i++) {
         if (rna[i] == 'T') {
             rna[i] = 'A';
         } else if (rna[i] == 'A') {
             rna[i] = 'U';
         } else if (rna[i] == 'C') {
             rna[i] = 'G';
         } else if (rna[i] == 'G') {
             rna[i] = 'C';
         }
     }

     //Convert input text to charArray -> dna 
     var dna = dnaInput.split('');                
     var dna_sequence = "";
     //Add spaces to dna sequence
     for (let j = 0; j < dna.length; j++) {
         if (j != 0 && (j % 3) === 0) {
             dna_sequence += " ";
         }
         dna_sequence += dna[j];
     }
     //Print out sequence in DNA text-field
     document.getElementById("dna-input").value = dna_sequence;

     rna_sequence = "";
     //Add spaces to rna sequence
     for (let k = 0; k < rna.length; k++) {
         if (k != 0 && (k % 3) === 0) {
             rna_sequence += " ";
         }
         rna_sequence += rna[k];
     }
     //Print out RNA conversion sequence in RNA text-field
     document.getElementById("rna-input").value = rna_sequence;
 }

 //Function to convert RNA to Protein Sequence
 function rnaToProtein() {
     //Turn into char Array
     var proteinSequence = rna_sequence.split(' ');
     for(let i = 0; i < proteinSequence.length; i++) {
         if((proteinSequence[i] == 'UUU') || (proteinSequence[i] == 'UUC')) {
             proteinSequence[i] = 'PHE';
         } else if ((proteinSequence[i] == 'UUA') || (proteinSequence[i] == 'UUG')) {
             proteinSequence[i] = 'LEU';
         } else if ((proteinSequence[i] == 'UCU') || (proteinSequence[i] == 'UCC') 
             || (proteinSequence[i] == 'UCA') || (proteinSequence[i] == 'UCG')) {
             proteinSequence[i] = 'SER';
         } else if ((proteinSequence[i] == 'UAU') || (proteinSequence[i] == 'UAC')) {
             proteinSequence[i] = 'TYR';
         } else if ((proteinSequence[i] == 'UAA') || (proteinSequence[i] == 'UAG') 
             || (proteinSequence[i] == 'UGA')) {
             proteinSequence[i] = 'STOP';
         } else if ((proteinSequence[i] == 'UGU') || (proteinSequence[i] == 'UGC')) {
             proteinSequence[i] = 'CYS';
         } else if ((proteinSequence[i] == 'UGG')) {
             proteinSequence[i] = 'TRP';
         } else if ((proteinSequence[i] == 'CUU') || (proteinSequence[i] == 'CUC') 
             || (proteinSequence[i] == 'CUA') || (proteinSequence[i] == 'CUG')) {
             proteinSequence[i] = 'LEU';
         } else if ((proteinSequence[i] == 'CCU') || (proteinSequence[i] == 'CCC') 
             || (proteinSequence[i] == 'CCA') || (proteinSequence[i] == 'CCG')) {
             proteinSequence[i] = 'PRO';
         } else if ((proteinSequence[i] == 'CAU') || (proteinSequence[i] == 'CAC')) {
             proteinSequence[i] = 'HIS';
         } else if ((proteinSequence[i] == 'CAA') || (proteinSequence[i] == 'CAG')) {
             proteinSequence[i] = 'GIN';
         } else if ((proteinSequence[i] == 'CGU') || (proteinSequence[i] == 'CGC') 
             || (proteinSequence[i] == 'CGA') || (proteinSequence[i] == 'CGG')) {
             proteinSequence[i] = 'ARG';
         } else if ((proteinSequence[i] == 'AUU') || (proteinSequence[i] == 'AUC') 
             || (proteinSequence[i] == 'AUA')) {
             proteinSequence[i] = 'ILE';
         } else if ((proteinSequence[i] == 'AUG')) {
             proteinSequence[i] = 'MET';
         } else if ((proteinSequence[i] == 'ACU') || (proteinSequence[i] == 'ACC') 
             || (proteinSequence[i] == 'ACA') || (proteinSequence[i] == 'ACG')) {
             proteinSequence[i] = 'THR';
         } else if ((proteinSequence[i] == 'AAU') || (proteinSequence[i] == 'AAC')) {
             proteinSequence[i] = 'ASN';
         } else if ((proteinSequence[i] == 'AAA') || (proteinSequence[i] == 'AAG')) {
             proteinSequence[i] = 'LYS';
         } else if ((proteinSequence[i] == 'AGU') || (proteinSequence[i] == 'AGC')) {
             proteinSequence[i] = 'SER';
         } else if ((proteinSequence[i] == 'AGA') || (proteinSequence[i] == 'AGG')) {
             proteinSequence[i] = 'ARG';
         } else if ((proteinSequence[i] == 'GUU') || (proteinSequence[i] == 'GUC') 
             || (proteinSequence[i] == 'GUA') || (proteinSequence[i] == 'GUG')) {
             proteinSequence[i] = 'VAL';
         } else if ((proteinSequence[i] == 'GCU') || (proteinSequence[i] == 'GCC') 
             || (proteinSequence[i] == 'GCA') || (proteinSequence[i] == 'GCG')) {
             proteinSequence[i] = 'ALA';
         } else if ((proteinSequence[i] == 'GAU') || (proteinSequence[i] == 'GAC')) {
             proteinSequence[i] = 'ASP';
         } else if ((proteinSequence[i] == 'GAA') || (proteinSequence[i] == 'GAG')) {
             proteinSequence[i] = 'GLU';
         } else if ((proteinSequence[i] == 'GGU') || (proteinSequence[i] == 'GGC') 
             || (proteinSequence[i] == 'GGA') || (proteinSequence[i] == 'GGG')) {
             proteinSequence[i] = 'GLY';
         }
     }
     //Turn back into string
     proteinConversion = proteinSequence.join();
     //Remove commas
     proteinConversion = proteinConversion.replace(/,/g,' ');
     //Print out protein sequence into protein text-field
     document.getElementById("protein-input").value = proteinConversion;
 }