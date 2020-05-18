class App {
  
    constructor(){
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');

        this.registerHandlers();
    }

    registerHandlers (){
        // this.formEl.onsubmit = function(event){
        //    addRepository()
        // }
        this.formEl.onsubmit = event => this.addRepository(event);

    }

    addRepository(event){
        event.preventDefault();
        this.repositories.push({
            nome : 'dersoncarlos.com.br',
            description: 'Tire sua ideia e der vida.',
            avatar_url: 'https://avatars3.githubusercontent.com/u/8890817?v=4',
            html_url: 'https://github.com/dersoncarlos',
        })
        console.log(this.repositories);
    }

    
    
}

new App();