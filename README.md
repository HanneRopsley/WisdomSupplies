# Wisdom Supplies
### This application supplies messages of wisdom to the end user depending on how they’re feeling and what the context is
**Coding languages**: html / css / javascript
**Version control and sharing**: git / github

## Hoe kunnen we de quotes random laten verschijnen? Bvb de combi 'sad' met 'family & friends' heeft 4 verschillende quotes. Kan dat met SQL? Of in een array steken? Wat zou de beste manier zijn?
=> zolang er geen database nodig is kunnen alle quotes in een array zitten
- dan kijken hoeveel quotes van het juiste type er in de array steken
- een random getal tussen 0 en (aantal -1) genereren
- de overeenkomstige quote tonen  