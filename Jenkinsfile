pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git 'https://github.com/Nidhakulsum/online-learning-platform.git'
            }
        }

        stage('Verify Project') {
            steps {
                sh 'ls'
                sh 'echo Build Successful'
            }
        }
    }
}
