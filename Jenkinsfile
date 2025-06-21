pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/Sivaneshmani/simple-docker-ci-cd-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo '🔧 Building Docker image...'
                bat 'docker build -t simplebackend ./backend'
            }
        }

        stage('Run Docker Container') {
            steps {
                echo '🚀 Running Docker container...'
                // 👇 Change port 5001 to 5002 or another unused port
                bat 'docker run -d -p 5002:5000 simplebackend'
            }
        }
    }

    post {
        failure {
            echo '❌ Build or Deployment failed!'
        }
    }
}
