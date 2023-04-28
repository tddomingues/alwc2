import { LightningElement } from 'lwc';

export default class lw3Um extends LightningElement {
    
    nome = ''
    peso = ''
    altura = ''
    resultado = ''

    handleChange(event) {
        const field = event.target.name
        if (field === 'nome') {
            this.nome = event.target.value
        } else if (field === 'peso') {
            this.peso = Number(event.target.value)
        } else{
            this.altura = Number(event.target.value)
        }
    }

    handleChangeClick() {
        this.resultado = this.peso / (this.altura * this.altura)
    }
}

