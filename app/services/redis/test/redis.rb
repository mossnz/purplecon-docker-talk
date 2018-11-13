describe command('redis-cli ping') do
    its(:stdout) { should match(/PONG/) }
end