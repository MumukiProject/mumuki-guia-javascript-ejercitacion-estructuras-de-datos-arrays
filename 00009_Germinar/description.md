> DefinΓ­ una funciΓ³n `germinar` que tome por parΓ‘metro un string de `plantines` con flores y plantines (π±). El array debe comenzar con una flor. La funciΓ³n debe devolver un string con los plantines convertidos en flores. El plantΓ­n se debe convertir en la primera flor que encuentre a su izquierda. Ejemplo:
>
```javascript
γ  germinar('π·π±π»π±πΈπ±π·π±π»π±πΈπ±')
'π·π·π»π»πΈπΈπ·π·π»π»πΈπΈ'
γ  germinar('π·π±π±π±π»π±π±πΈπ±π±π±π±')
'π·π·π·π·π»π»π»πΈπΈπΈπΈπΈ'
γ  germinar('π»πΈπ±π·π»π±π±π·π·π±π±π±')
'π»πΈπΈπ·π»π»π»π·π·π·π·π·'
```