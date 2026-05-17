pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t online-learning-app ./app'
            }
        }

        stage('Run Docker Container') {
            steps {

                sh 'docker stop online-learning-container || true'

                sh 'docker rm online-learning-container || true'

                sh 'docker run -d -p 3000:3000 --name online-learning-container online-learning-app'
            }
        }
    }
}
