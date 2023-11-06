pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('DOCKER_Aida')
    }
    stages {
        stage('Checkout') {
            agent any
            steps {
                git branch: 'main', url: 'https://github.com/AidaHaouas/projectdevops.git'
            }
        }
        stage('Init') {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('Build') {
            steps {
                docker.build('aidahaouas/todo-docker-build:v1:$BUILD_ID', '.')
            }
        }
        stage('Deliver') {
            steps {
                docker.push('aidahaouas/todo-docker-build:v1:$BUILD_ID')
            }
        }
        stage('Cleanup') {
            steps {
                docker.image.remove('aidahaouas/todo-docker-build:v1:$BUILD_ID', force: true)
                docker.logout()
            }
        }
    }
}