pipeline {
    agent any
    environment {
        
        DOCKERHUB_CREDENTIALS = credentials('DOCKER_Aida')
    }
    stages {
        stage('Checkout'){
            agent any
            steps{
                
                git branch: 'main', url:'https://github.com/AidaHaouas/projectdevops.git'
            }
        }
        stage('Init'){
            steps{
                
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('Build'){
            steps {
                
               sh 'docker build -t aidahaouas/todo-docker-build:$BUILD_ID -f ./Dockerfile .'
                //sh 'docker build -t $DOCKERHUB_CREDENTIALS_USR/calculator-app:$BUILD_ID' 
            }
        }
        stage('Deliver'){
            steps {
                
                sh 'docker push aidahaouas/todo-docker-app:$BUILD_ID'
            }
        }
        stage('Cleanup'){
            steps {
            
            sh 'docker rmi aidahaouas/todo-docker-app:$BUILD_ID'
            sh 'docker logout'
            }
        }
    }
}