pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'simplebackend'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Sivaneshmani/simple-docker-ci-cd-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo '🔧 Building Docker image...'
                bat 'docker build -t %DOCKER_IMAGE% ./backend'
            }
        }

        stage('Run Docker Container') {
            steps {
                echo '🚀 Running Docker container...'
                bat 'docker run -d -p 5000:5000 %DOCKER_IMAGE%'
            }
        }
    }

    post {
        failure {
            echo '❌ Build or Deployment failed!'
        }
    }
}
