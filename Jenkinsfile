pipeline {
    agent any
    environment {
        
        DOCKERHUB_CREDENTIALS = credentials('DOCKER_Aida')
    }
    stages {
        stage('Checkout'){
            agent any
            steps{
                
                git branch: 'main', url:'https://github.com/AidaHaouas/todo-devops.git'
            }
        }
        stage('Init'){
            steps{
                
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('Build'){
            steps {
                
                sh 'docker build -t Todo-docker-build . -f ./Dockerfile .'
                //sh 'docker build -t $DOCKERHUB_CREDENTIALS_USR/calculator-app:$BUILD_ID' 
            }
        }
        stage('Deliver'){
            steps {
                
                sh 'docker push Todo-docker-build .'
            }
        }
        stage('Cleanup'){
            steps {
            
            sh 'docker rmi Todo-docker-build'
            sh 'docker logout'
            }
        }
    }
}