pipeline {
 
    agent any
 
    tools {
        nodejs 'NodeJS'
    }
 
    stages {
 
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }
 
        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }
 
        stage('Install Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }
 
        stage('Run Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }
 
    post {
        always {
      
            allure(
                includeProperties: false,
                reportBuildPolicy: 'ALWAYS',
                results: [[path: 'allure-results']]
            )
        }
 
        success {
            echo 'Jenkins pipeline completed successfully'
        }
 
        failure {
            echo ' Jenkins pipeline failed'
        }
    }
}