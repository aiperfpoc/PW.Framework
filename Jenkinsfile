pipeline {
 
    agent any
 
    tools {
 
        nodejs 'nodejs-18'
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
 
        stage('Allure Report') {
            steps {
                
                bat '''
                if exist allure-results (
                    allure generate allure-results --clean -o allure-report
                ) else (
                    echo "No allure-results found, skipping report generation"
                )
                '''
            }
        }
    }
 
    post {
        always {
            // Archive Playwright test results if present
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
            archiveArtifacts artifacts: 'allure-report/**', allowEmptyArchive: true
        }
 
        success {
            echo 'Jenkins pipeline completed successfully'
        }
 
        failure {
            echo 'Jenkins pipeline failed'
        }
    }
}