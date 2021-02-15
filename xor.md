
# Table of Contents



<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="org-right" />

<col  class="org-right" />

<col  class="org-right" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-right">A</th>
<th scope="col" class="org-right">B</th>
<th scope="col" class="org-right">A XOR B</th>
</tr>
</thead>

<tbody>
<tr>
<td class="org-right">0</td>
<td class="org-right">0</td>
<td class="org-right">0</td>
</tr>


<tr>
<td class="org-right">0</td>
<td class="org-right">1</td>
<td class="org-right">1</td>
</tr>


<tr>
<td class="org-right">1</td>
<td class="org-right">0</td>
<td class="org-right">1</td>
</tr>


<tr>
<td class="org-right">1</td>
<td class="org-right">1</td>
<td class="org-right">0</td>
</tr>
</tbody>
</table>

L'opérateur XOR, aussi appelé OU exclusif, renvoie Vrai (true) pour deux entrées A et B
seulement quand l'un des deux est vrai.
A XOR B est donc équivalent à : 

A XOR B = (A || B) && !(A && B)
A XOR B = (A && !B) || (!A && B) 

Ceci est facilement visible avec un diagramme de Venn:

[Diagramme de Venn pour l'opérateur XOR](https://upload.wikimedia.org/wikipedia/commons/4/46/Venn0110.svg) 

