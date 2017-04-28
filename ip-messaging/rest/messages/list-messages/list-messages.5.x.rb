require 'http'
require 'twilio-ruby'

# Get your Account SID and Auth Token from twilio.com/console
account_sid = 'ACCOUNT_SID'
auth_token = 'AUTH_TOKEN'
@client = Twilio::REST::Client.new(account_sid, auth_token)

# List the messages
service = @client.ip_messaging.v2.services('SERVICE_SID')
channel = service.channels('CHANNEL_SID')
messages = channel.messages
puts messages
